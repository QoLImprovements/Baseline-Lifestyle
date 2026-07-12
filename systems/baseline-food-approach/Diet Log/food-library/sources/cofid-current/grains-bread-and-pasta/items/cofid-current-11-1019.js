/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Including Cheerios and own brands",
  "id": "cofid-current-11-1019",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, multigrain hoops, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 460.0,
    "carbs_g": 80.7,
    "energy_kcal": 368.0,
    "fat_g": 3.8,
    "fibre_g": 5.7,
    "folate_ug": 200.0,
    "iron_mg": 14.7,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 7.9,
    "salt_g": 0.825,
    "sat_fat_g": 0.7,
    "sodium_mg": 330.0,
    "sugar_g": 22.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 71.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1019",
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
