/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 5 products",
  "id": "cofid-old-17-633",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rice cakes, plain, low salt",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 79.3,
    "energy_kcal": 358.0,
    "fat_g": 3.4,
    "fibre_g": 5.0,
    "folate_ug": 17.0,
    "iron_mg": 1.07,
    "magnesium_mg": 112.0,
    "omega3_g": 0.04,
    "phosphorus_mg": 308.0,
    "potassium_mg": 276.0,
    "protein_g": 7.4,
    "salt_g": 0.2175,
    "sat_fat_g": 0.6,
    "sodium_mg": 87.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-633",
  "state": "Unspecified",
  "subcategory": "SN",
  "tags": [
    "grains-bread-and-pasta",
    "sn",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
