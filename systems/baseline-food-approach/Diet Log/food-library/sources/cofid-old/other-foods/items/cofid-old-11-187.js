/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "3 brands",
  "id": "cofid-old-11-187",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Water biscuits",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 75.8,
    "energy_kcal": 440.0,
    "fat_g": 12.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.6,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 140.0,
    "protein_g": 10.8,
    "salt_g": 1.175,
    "sat_fat_g": 0.0,
    "sodium_mg": 470.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-187",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
