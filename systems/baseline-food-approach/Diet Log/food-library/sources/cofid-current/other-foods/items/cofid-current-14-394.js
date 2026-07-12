/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products, including whole and chopped, not including partially rehydrated dates. No added glucose syrup",
  "id": "cofid-current-14-394",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Dates, dried, flesh and skin",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 58.7,
    "energy_kcal": 235.0,
    "fat_g": 0.6,
    "fibre_g": 7.5,
    "folate_ug": 13.0,
    "iron_mg": 2.21,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 727.0,
    "protein_g": 2.4,
    "salt_g": 0.0275,
    "sat_fat_g": 0.3,
    "sodium_mg": 11.0,
    "sugar_g": 58.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-394",
  "state": "Dried",
  "subcategory": "FA",
  "tags": [
    "dried",
    "fa",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
