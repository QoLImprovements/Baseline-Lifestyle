/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated as raisins 37%, peanuts 36%, hazelnuts 12%, brazil nuts 11 % and almonds 4%",
  "id": "cofid-old-14-888",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nuts and raisins, mixed",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 31.5,
    "energy_kcal": 481.0,
    "fat_g": 34.1,
    "fibre_g": 0.0,
    "folate_ug": 56.0,
    "iron_mg": 3.09,
    "magnesium_mg": 164.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 306.0,
    "potassium_mg": 810.0,
    "protein_g": 14.2,
    "salt_g": 0.0625,
    "sat_fat_g": 5.76,
    "sodium_mg": 25.0,
    "sugar_g": 28.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 8.38,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-888",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
