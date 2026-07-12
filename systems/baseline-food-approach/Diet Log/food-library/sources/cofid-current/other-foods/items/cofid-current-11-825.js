/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products, including bruschettinne and crostini",
  "id": "cofid-current-11-825",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Minibreads, toasted, retail",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 68.9,
    "energy_kcal": 423.0,
    "fat_g": 13.6,
    "fibre_g": 4.2,
    "folate_ug": 21.0,
    "iron_mg": 1.4,
    "magnesium_mg": 26.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 114.0,
    "potassium_mg": 221.0,
    "protein_g": 10.5,
    "salt_g": 2.1625,
    "sat_fat_g": 3.22,
    "sodium_mg": 865.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.93,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-825",
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
