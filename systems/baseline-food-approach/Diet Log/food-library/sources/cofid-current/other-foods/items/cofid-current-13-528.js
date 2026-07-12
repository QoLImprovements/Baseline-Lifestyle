/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "12 samples, 8 brands, garden peas and petit pois, cooked for 2-4.5 minutes",
  "id": "cofid-current-13-528",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, frozen, microwaved",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 10.8,
    "energy_kcal": 71.0,
    "fat_g": 0.9,
    "fibre_g": 5.6,
    "folate_ug": 60.0,
    "iron_mg": 1.75,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 179.0,
    "protein_g": 5.7,
    "salt_g": 0.01,
    "sat_fat_g": 0.17,
    "sodium_mg": 4.0,
    "sugar_g": 6.6,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-528",
  "state": "Frozen",
  "subcategory": "DF",
  "tags": [
    "df",
    "frozen",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
