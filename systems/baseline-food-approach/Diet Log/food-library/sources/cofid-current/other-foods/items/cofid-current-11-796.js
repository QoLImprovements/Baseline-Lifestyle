/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "12 samples, 11 products, including malted milk, shortcake, nice",
  "id": "cofid-current-11-796",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, short, sweet",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 71.7,
    "energy_kcal": 479.0,
    "fat_g": 20.9,
    "fibre_g": 2.2,
    "folate_ug": 9.0,
    "iron_mg": 1.64,
    "magnesium_mg": 20.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 106.0,
    "potassium_mg": 155.0,
    "protein_g": 5.6,
    "salt_g": 1.0075,
    "sat_fat_g": 10.05,
    "sodium_mg": 403.0,
    "sugar_g": 23.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.68,
    "vitamin_k_ug": 4.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-796",
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
