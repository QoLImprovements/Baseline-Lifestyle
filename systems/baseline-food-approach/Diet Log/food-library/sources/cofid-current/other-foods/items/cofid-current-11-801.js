/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 5 products, including digestives, rich tea and reduced fat Hobnobs",
  "id": "cofid-current-11-801",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, plain, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 75.7,
    "energy_kcal": 432.0,
    "fat_g": 13.5,
    "fibre_g": 4.4,
    "folate_ug": 11.0,
    "iron_mg": 2.01,
    "magnesium_mg": 30.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 124.0,
    "potassium_mg": 193.0,
    "protein_g": 6.6,
    "salt_g": 1.1775,
    "sat_fat_g": 4.31,
    "sodium_mg": 471.0,
    "sugar_g": 21.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.37,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-801",
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
