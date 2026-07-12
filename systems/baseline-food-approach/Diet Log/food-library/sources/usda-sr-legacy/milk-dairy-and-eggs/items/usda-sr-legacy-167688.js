/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "packet",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-167688",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cream substitute, powdered, light",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 73.4,
    "energy_kcal": 1800.0,
    "fat_g": 15.7,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.03,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 136.0,
    "potassium_mg": 902.0,
    "protein_g": 1.9,
    "salt_g": 0.5725,
    "sat_fat_g": 3.8,
    "sodium_mg": 229.0,
    "sugar_g": 73.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167688",
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
