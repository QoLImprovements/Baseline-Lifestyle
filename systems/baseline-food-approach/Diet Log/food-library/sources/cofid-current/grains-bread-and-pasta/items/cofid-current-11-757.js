/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "16 samples, 8 products, including Sugar Puffs and own brand",
  "id": "cofid-current-11-757",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, puffed wheat, honey coated, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 86.8,
    "energy_kcal": 355.0,
    "fat_g": 1.2,
    "fibre_g": 3.1,
    "folate_ug": 13.0,
    "iron_mg": 8.0,
    "magnesium_mg": 49.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 148.0,
    "potassium_mg": 188.0,
    "protein_g": 4.7,
    "salt_g": 0.05,
    "sat_fat_g": 0.16,
    "sodium_mg": 20.0,
    "sugar_g": 36.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-757",
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
