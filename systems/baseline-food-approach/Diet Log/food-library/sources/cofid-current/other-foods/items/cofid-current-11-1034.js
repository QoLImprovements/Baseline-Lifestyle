/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1034",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, wholemeal, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 66.6,
    "energy_kcal": 369.0,
    "fat_g": 7.5,
    "fibre_g": 9.2,
    "folate_ug": 15.0,
    "iron_mg": 2.26,
    "magnesium_mg": 82.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 315.0,
    "potassium_mg": 423.0,
    "protein_g": 12.7,
    "salt_g": 0.1725,
    "sat_fat_g": 3.89,
    "sodium_mg": 69.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 73.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 0.42
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1034",
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
