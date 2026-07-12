/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 5 from takeaway shops, naan with nuts and raisins",
  "id": "cofid-current-11-910",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, naan, peshwari naan, takeaway and retail",
  "nutritionPerBasis": {
    "calcium_mg": 226.0,
    "carbs_g": 39.8,
    "energy_kcal": 251.0,
    "fat_g": 7.9,
    "fibre_g": 5.6,
    "folate_ug": 22.0,
    "iron_mg": 1.37,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 197.0,
    "protein_g": 7.6,
    "salt_g": 0.975,
    "sat_fat_g": 3.13,
    "sodium_mg": 390.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.62,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-910",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
