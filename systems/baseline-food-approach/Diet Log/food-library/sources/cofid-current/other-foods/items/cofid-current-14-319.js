/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "22 samples, autumn and winter, UK grown and imported, pre-packed and loose, including Gala, Braeburn, Golden Delicious, Pink Lady, Cox and Granny Smith",
  "id": "cofid-current-14-319",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apples, eating, raw, flesh and skin",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 11.6,
    "energy_kcal": 51.0,
    "fat_g": 0.5,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 0.09,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 100.0,
    "protein_g": 0.6,
    "salt_g": 0.0025,
    "sat_fat_g": 0.12,
    "sodium_mg": 1.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 5.6
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-319",
  "state": "Raw",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
