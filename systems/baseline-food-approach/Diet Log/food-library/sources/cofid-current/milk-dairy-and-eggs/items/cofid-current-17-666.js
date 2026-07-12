/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-666",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese sauce, packet mix, made up with semi-skimmed milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 171.0,
    "carbs_g": 9.7,
    "energy_kcal": 106.0,
    "fat_g": 5.2,
    "fibre_g": 0.2,
    "folate_ug": 10.0,
    "iron_mg": 0.12,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 184.0,
    "potassium_mg": 194.0,
    "protein_g": 5.8,
    "salt_g": 0.955,
    "sat_fat_g": 3.26,
    "sodium_mg": 382.0,
    "sugar_g": 5.3,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-666",
  "state": "Unspecified",
  "subcategory": "WCD",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "wcd"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
