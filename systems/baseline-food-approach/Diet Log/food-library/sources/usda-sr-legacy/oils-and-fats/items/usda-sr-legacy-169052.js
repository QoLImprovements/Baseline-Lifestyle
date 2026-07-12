/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tablespoon",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-169052",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Margarine-like, butter-margarine blend, 80% fat, stick, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 0.6,
    "energy_kcal": 718.0,
    "fat_g": 80.7,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.09,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 37.0,
    "protein_g": 0.9,
    "salt_g": 0.07,
    "sat_fat_g": 26.9,
    "sodium_mg": 28.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 819.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 5.0,
    "vitamin_k_ug": 70.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169052",
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
