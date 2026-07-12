/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 4 products, including Weetos, Nesquick, Coco Shreddies and own brands",
  "id": "cofid-current-11-762",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, wheat and multigrain, chocolate flavoured, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 83.2,
    "energy_kcal": 375.0,
    "fat_g": 4.1,
    "fibre_g": 6.3,
    "folate_ug": 171.0,
    "iron_mg": 10.7,
    "magnesium_mg": 52.0,
    "omega3_g": 0.18,
    "phosphorus_mg": 143.0,
    "potassium_mg": 355.0,
    "protein_g": 6.5,
    "salt_g": 0.45,
    "sat_fat_g": 1.37,
    "sodium_mg": 180.0,
    "sugar_g": 30.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-762",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
