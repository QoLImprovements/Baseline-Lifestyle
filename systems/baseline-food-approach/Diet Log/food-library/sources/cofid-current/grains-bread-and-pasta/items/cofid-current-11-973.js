/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "12 samples, including garlic and coriander",
  "id": "cofid-current-11-973",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, naan, retail",
  "nutritionPerBasis": {
    "calcium_mg": 187.0,
    "carbs_g": 50.2,
    "energy_kcal": 285.0,
    "fat_g": 7.3,
    "fibre_g": 2.9,
    "folate_ug": 15.0,
    "iron_mg": 1.6,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 299.0,
    "potassium_mg": 172.0,
    "protein_g": 7.8,
    "salt_g": 0.9,
    "sat_fat_g": 0.97,
    "sodium_mg": 360.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 3.8
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-973",
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
