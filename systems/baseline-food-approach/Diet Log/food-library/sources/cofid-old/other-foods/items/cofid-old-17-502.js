/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Manufacturer's data (SmithKline Beecham)",
  "id": "cofid-old-17-502",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Horlicks LowFat Instant powder",
  "nutritionPerBasis": {
    "calcium_mg": 655.0,
    "carbs_g": 73.0,
    "energy_kcal": 365.0,
    "fat_g": 4.1,
    "fibre_g": 0.0,
    "folate_ug": 125.0,
    "iron_mg": 0.0,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 870.0,
    "protein_g": 13.7,
    "salt_g": 2.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 800.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 500.0,
    "vitamin_c_mg": 38.0,
    "vitamin_e_mg": 6.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-502",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "other-foods",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
