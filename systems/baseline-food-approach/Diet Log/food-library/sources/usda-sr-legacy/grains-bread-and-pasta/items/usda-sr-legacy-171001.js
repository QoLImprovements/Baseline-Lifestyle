/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "4-biscuit",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171001",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "4-biscuit",
      "kind": "unit",
      "label": "4 biscuit"
    }
  ],
  "name": "Babyfood, Baby MUM MUM Rice Biscuits",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 83.2,
    "energy_kcal": 1640.0,
    "fat_g": 0.87,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.0,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 504.0,
    "protein_g": 12.5,
    "salt_g": 0.7825,
    "sat_fat_g": 0.238,
    "sodium_mg": 313.0,
    "sugar_g": 12.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171001",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
