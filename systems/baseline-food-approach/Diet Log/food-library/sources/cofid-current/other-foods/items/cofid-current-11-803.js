/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 samples, 4 products, including Hobnobs and own label",
  "id": "cofid-current-11-803",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, digestive, with oats, plain",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 66.4,
    "energy_kcal": 480.0,
    "fat_g": 22.9,
    "fibre_g": 7.2,
    "folate_ug": 13.0,
    "iron_mg": 2.15,
    "magnesium_mg": 60.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 214.0,
    "potassium_mg": 248.0,
    "protein_g": 6.4,
    "salt_g": 0.82,
    "sat_fat_g": 5.94,
    "sodium_mg": 328.0,
    "sugar_g": 25.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.71,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-803",
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
