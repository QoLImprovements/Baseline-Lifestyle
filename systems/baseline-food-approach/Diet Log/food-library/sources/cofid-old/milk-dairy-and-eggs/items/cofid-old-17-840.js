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
  "id": "cofid-old-17-840",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "White sauce, packet mix, made up with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 9.1,
    "energy_kcal": 90.0,
    "fat_g": 4.4,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.07,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 181.0,
    "protein_g": 4.1,
    "salt_g": 0.8925,
    "sat_fat_g": 0.0,
    "sodium_mg": 357.0,
    "sugar_g": 5.0,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-840",
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
