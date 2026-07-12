/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples, 5 products, including Coco Pops and own brand",
  "id": "cofid-current-11-753",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, rice, chocolate flavoured, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 456.0,
    "carbs_g": 89.6,
    "energy_kcal": 375.0,
    "fat_g": 2.3,
    "fibre_g": 2.0,
    "folate_ug": 180.0,
    "iron_mg": 11.0,
    "magnesium_mg": 41.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 141.0,
    "potassium_mg": 146.0,
    "protein_g": 4.6,
    "salt_g": 0.8,
    "sat_fat_g": 1.2,
    "sodium_mg": 320.0,
    "sugar_g": 37.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-753",
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
