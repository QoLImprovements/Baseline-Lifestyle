/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "serving",
  "description": "Snacks",
  "id": "usda-sr-legacy-173161",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Rice crackers",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 82.6,
    "energy_kcal": 1740.0,
    "fat_g": 5.0,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 0.0,
    "magnesium_mg": 156.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 362.0,
    "potassium_mg": 243.0,
    "protein_g": 10.0,
    "salt_g": 0.5825,
    "sat_fat_g": 0.0,
    "sodium_mg": 233.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173161",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "grains-bread-and-pasta",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
