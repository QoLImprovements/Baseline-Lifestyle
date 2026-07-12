/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 samples, 4 brands",
  "id": "cofid-old-17-113",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Liquorice shapes",
  "nutritionPerBasis": {
    "calcium_mg": 440.0,
    "carbs_g": 65.0,
    "energy_kcal": 278.0,
    "fat_g": 1.4,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 16.7,
    "magnesium_mg": 170.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 74.0,
    "potassium_mg": 1590.0,
    "protein_g": 5.5,
    "salt_g": 0.475,
    "sat_fat_g": 0.39,
    "sodium_mg": 190.0,
    "sugar_g": 41.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-113",
  "state": "Unspecified",
  "subcategory": "SEC",
  "tags": [
    "other-foods",
    "sec",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
