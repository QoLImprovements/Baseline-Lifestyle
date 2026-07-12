/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-173140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, soy chips or crisps, salted",
  "nutritionPerBasis": {
    "calcium_mg": 171.0,
    "carbs_g": 53.2,
    "energy_kcal": 1610.0,
    "fat_g": 7.35,
    "fibre_g": 3.5,
    "folate_ug": 240.0,
    "iron_mg": 5.2,
    "magnesium_mg": 170.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 7.0,
    "protein_g": 26.5,
    "salt_g": 2.105,
    "sat_fat_g": 1.1,
    "sodium_mg": 842.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 11.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173140",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
