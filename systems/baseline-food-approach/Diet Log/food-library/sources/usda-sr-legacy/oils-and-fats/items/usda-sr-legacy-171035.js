/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tablespoon-1-nlea-serving",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-171035",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tablespoon-1-nlea-serving",
      "kind": "unit",
      "label": "tablespoon (1 NLEA serving)"
    }
  ],
  "name": "Margarine-like spread, BENECOL Light Spread",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 5.71,
    "energy_kcal": 1490.0,
    "fat_g": 38.7,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 1.0,
    "omega3_g": 1.98,
    "phosphorus_mg": 4.0,
    "potassium_mg": 4.0,
    "protein_g": 0.0,
    "salt_g": 1.675,
    "sat_fat_g": 4.77,
    "sodium_mg": 670.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1370.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 37.2,
    "vitamin_k_ug": 56.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171035",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
