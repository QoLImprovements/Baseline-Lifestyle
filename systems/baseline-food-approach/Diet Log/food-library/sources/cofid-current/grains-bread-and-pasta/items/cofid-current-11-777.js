/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "6 samples, 3 products, including Raisin Wheats and own brand apricot wheats",
  "id": "cofid-current-11-777",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, shredded wheat type with fruit, unfortified",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 74.0,
    "energy_kcal": 326.0,
    "fat_g": 1.7,
    "fibre_g": 8.8,
    "folate_ug": 112.0,
    "iron_mg": 3.5,
    "magnesium_mg": 61.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 195.0,
    "potassium_mg": 388.0,
    "protein_g": 8.4,
    "salt_g": 0.0525,
    "sat_fat_g": 0.25,
    "sodium_mg": 21.0,
    "sugar_g": 18.7,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-777",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
