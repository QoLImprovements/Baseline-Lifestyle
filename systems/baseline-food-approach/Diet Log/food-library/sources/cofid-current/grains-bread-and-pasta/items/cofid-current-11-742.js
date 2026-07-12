/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "15 samples, 9 products, including Kellogg's and other / own brands",
  "id": "cofid-current-11-742",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, cornflakes, fortified",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 90.9,
    "energy_kcal": 376.0,
    "fat_g": 0.8,
    "fibre_g": 2.6,
    "folate_ug": 0.0,
    "iron_mg": 11.8,
    "magnesium_mg": 12.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 46.0,
    "potassium_mg": 88.0,
    "protein_g": 7.1,
    "salt_g": 1.125,
    "sat_fat_g": 0.14,
    "sodium_mg": 450.0,
    "sugar_g": 7.3,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.06
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-742",
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
