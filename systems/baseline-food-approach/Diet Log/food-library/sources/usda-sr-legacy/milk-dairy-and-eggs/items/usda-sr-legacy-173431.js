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
  "id": "usda-sr-legacy-173431",
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
    }
  ],
  "name": "Cheese, parmesan, shredded",
  "nutritionPerBasis": {
    "calcium_mg": 1250.0,
    "carbs_g": 3.41,
    "energy_kcal": 1740.0,
    "fat_g": 27.3,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.87,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 735.0,
    "potassium_mg": 97.0,
    "protein_g": 37.9,
    "salt_g": 4.25,
    "sat_fat_g": 17.4,
    "sodium_mg": 1700.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 229.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173431",
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
