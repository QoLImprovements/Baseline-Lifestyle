/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "scoop",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-168970",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, ENFAMIL, ENFAGROW, GENTLEASE, Toddler transitions, with ARA and DHA, powder",
  "nutritionPerBasis": {
    "calcium_mg": 990.0,
    "carbs_g": 53.5,
    "energy_kcal": 2090.0,
    "fat_g": 26.0,
    "fibre_g": 0.0,
    "folate_ug": 80.0,
    "iron_mg": 7.5,
    "magnesium_mg": 40.0,
    "omega3_g": 0.085,
    "phosphorus_mg": 650.0,
    "potassium_mg": 650.0,
    "protein_g": 12.9,
    "salt_g": 0.5,
    "sat_fat_g": 10.8,
    "sodium_mg": 200.0,
    "sugar_g": 12.6,
    "vitamin_a_ug": 450.0,
    "vitamin_c_mg": 60.0,
    "vitamin_e_mg": 4.46,
    "vitamin_k_ug": 45.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168970",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
