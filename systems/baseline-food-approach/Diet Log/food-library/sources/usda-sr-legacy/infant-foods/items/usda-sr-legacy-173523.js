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
  "id": "usda-sr-legacy-173523",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.8,
      "key": "scoop",
      "kind": "unit",
      "label": "scoop"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, Enfamil Enspire Powder, with ARA and DHA, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 390.0,
    "carbs_g": 57.2,
    "energy_kcal": 514.0,
    "fat_g": 27.0,
    "fibre_g": 0.0,
    "folate_ug": 80.0,
    "iron_mg": 9.0,
    "magnesium_mg": 40.0,
    "omega3_g": 0.17,
    "phosphorus_mg": 220.0,
    "potassium_mg": 540.0,
    "protein_g": 10.5,
    "salt_g": 0.3375,
    "sat_fat_g": 11.3,
    "sodium_mg": 135.0,
    "sugar_g": 53.0,
    "vitamin_a_ug": 450.0,
    "vitamin_c_mg": 60.0,
    "vitamin_e_mg": 4.5,
    "vitamin_k_ug": 45.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173523",
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
