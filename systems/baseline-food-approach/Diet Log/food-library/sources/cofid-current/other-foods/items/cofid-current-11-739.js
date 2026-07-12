/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products, including McVities, Lyons and own brands",
  "id": "cofid-current-11-739",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Jaffa cakes",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 69.3,
    "energy_kcal": 354.0,
    "fat_g": 8.5,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 2.61,
    "magnesium_mg": 30.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 98.0,
    "potassium_mg": 133.0,
    "protein_g": 4.4,
    "salt_g": 0.2125,
    "sat_fat_g": 4.33,
    "sodium_mg": 85.0,
    "sugar_g": 51.6,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-739",
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
