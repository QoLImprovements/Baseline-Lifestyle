/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "5 samples, 2 products, including Party Rings, Ice Gems",
  "id": "cofid-current-11-808",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, iced",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 77.1,
    "energy_kcal": 406.0,
    "fat_g": 10.8,
    "fibre_g": 0.6,
    "folate_ug": 7.0,
    "iron_mg": 1.2,
    "magnesium_mg": 13.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 90.0,
    "potassium_mg": 112.0,
    "protein_g": 4.8,
    "salt_g": 0.685,
    "sat_fat_g": 4.98,
    "sodium_mg": 274.0,
    "sugar_g": 44.6,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.21,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-808",
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
