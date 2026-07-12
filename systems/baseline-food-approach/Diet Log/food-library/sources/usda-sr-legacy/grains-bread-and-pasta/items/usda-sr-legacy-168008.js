/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "roll",
  "description": "Baked Products",
  "id": "usda-sr-legacy-168008",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "roll",
      "kind": "unit",
      "label": "roll"
    }
  ],
  "name": "Schar, Gluten-Free, Classic White Rolls",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 50.5,
    "energy_kcal": 239.0,
    "fat_g": 2.65,
    "fibre_g": 5.1,
    "folate_ug": 8.0,
    "iron_mg": 3.57,
    "magnesium_mg": 13.0,
    "omega3_g": 0.022,
    "phosphorus_mg": 50.0,
    "potassium_mg": 76.0,
    "protein_g": 3.34,
    "salt_g": 1.4825,
    "sat_fat_g": 0.215,
    "sodium_mg": 593.0,
    "sugar_g": 6.87,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168008",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
