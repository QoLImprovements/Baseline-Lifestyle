/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-167705",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "cup-grated",
      "kind": "unit",
      "label": "cup, grated"
    }
  ],
  "name": "Cheese, parmesan, low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 800.0,
    "carbs_g": 3.7,
    "energy_kcal": 451.0,
    "fat_g": 30.0,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.95,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 807.0,
    "potassium_mg": 107.0,
    "protein_g": 41.6,
    "salt_g": 0.1575,
    "sat_fat_g": 19.1,
    "sodium_mg": 63.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 125.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167705",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
