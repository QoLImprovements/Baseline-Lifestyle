/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 4 products, including Shredded Wheat and bitesize and own brand",
  "id": "cofid-current-11-775",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, shredded wheat type, unfortified",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 71.2,
    "energy_kcal": 333.0,
    "fat_g": 2.5,
    "fibre_g": 12.2,
    "folate_ug": 27.0,
    "iron_mg": 2.8,
    "magnesium_mg": 86.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 271.0,
    "potassium_mg": 340.0,
    "protein_g": 10.9,
    "salt_g": 0.01,
    "sat_fat_g": 0.34,
    "sodium_mg": 4.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-775",
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
