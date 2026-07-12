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
  "id": "usda-sr-legacy-173461",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Dulce de Leche",
  "nutritionPerBasis": {
    "calcium_mg": 251.0,
    "carbs_g": 55.4,
    "energy_kcal": 315.0,
    "fat_g": 7.35,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.17,
    "magnesium_mg": 22.0,
    "omega3_g": 0.063,
    "phosphorus_mg": 193.0,
    "potassium_mg": 350.0,
    "protein_g": 6.84,
    "salt_g": 0.3225,
    "sat_fat_g": 4.53,
    "sodium_mg": 129.0,
    "sugar_g": 49.7,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173461",
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
