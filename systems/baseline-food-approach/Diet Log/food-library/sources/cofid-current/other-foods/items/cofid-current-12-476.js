/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products, frozen and chilled",
  "id": "cofid-current-12-476",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tiramisu",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 27.1,
    "energy_kcal": 244.0,
    "fat_g": 14.0,
    "fibre_g": 1.0,
    "folate_ug": 10.0,
    "iron_mg": 0.4,
    "magnesium_mg": 10.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 86.0,
    "potassium_mg": 105.0,
    "protein_g": 4.2,
    "salt_g": 0.1675,
    "sat_fat_g": 8.61,
    "sodium_mg": 67.0,
    "sugar_g": 21.1,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-476",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
