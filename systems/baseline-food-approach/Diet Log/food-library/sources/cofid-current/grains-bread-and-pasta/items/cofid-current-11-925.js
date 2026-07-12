/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "8 samples, 6 products",
  "id": "cofid-current-11-925",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tortilla, wheat, soft",
  "nutritionPerBasis": {
    "calcium_mg": 148.0,
    "carbs_g": 53.9,
    "energy_kcal": 285.0,
    "fat_g": 5.7,
    "fibre_g": 3.6,
    "folate_ug": 8.0,
    "iron_mg": 1.6,
    "magnesium_mg": 18.0,
    "omega3_g": 0.55,
    "phosphorus_mg": 212.0,
    "potassium_mg": 126.0,
    "protein_g": 7.8,
    "salt_g": 1.555,
    "sat_fat_g": 2.5,
    "sodium_mg": 622.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-925",
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
