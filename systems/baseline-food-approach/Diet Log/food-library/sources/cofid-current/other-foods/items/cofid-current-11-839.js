/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products, including French and fondant fancies, cup cakes, fairy cakes, angel and lemon slices",
  "id": "cofid-current-11-839",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cakes, fancy iced, individual, retail",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 57.6,
    "energy_kcal": 381.0,
    "fat_g": 16.8,
    "fibre_g": 1.1,
    "folate_ug": 7.0,
    "iron_mg": 0.92,
    "magnesium_mg": 10.0,
    "omega3_g": 0.76,
    "phosphorus_mg": 148.0,
    "potassium_mg": 147.0,
    "protein_g": 3.3,
    "salt_g": 0.6875,
    "sat_fat_g": 5.86,
    "sodium_mg": 275.0,
    "sugar_g": 44.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.61,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-839",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
