/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products, including Jammie Dodgers and own label",
  "id": "cofid-current-11-804",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, jam filled",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 74.0,
    "energy_kcal": 428.0,
    "fat_g": 14.4,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 1.11,
    "magnesium_mg": 14.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 94.0,
    "potassium_mg": 135.0,
    "protein_g": 5.2,
    "salt_g": 0.41,
    "sat_fat_g": 6.75,
    "sodium_mg": 164.0,
    "sugar_g": 33.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-804",
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
