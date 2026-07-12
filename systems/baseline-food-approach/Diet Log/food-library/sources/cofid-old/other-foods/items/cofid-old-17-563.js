/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 32g powder to 200ml water",
  "id": "cofid-old-17-563",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Horlicks LowFat Instant powder, made up with water",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 10.1,
    "energy_kcal": 50.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.0,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 120.0,
    "protein_g": 1.9,
    "salt_g": 0.275,
    "sat_fat_g": 0.0,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-563",
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
