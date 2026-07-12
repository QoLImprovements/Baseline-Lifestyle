/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "racc",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-2685578",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Tomatoes, whole, canned, solids and liquids, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 19.8,
    "carbs_g": 4.29,
    "energy_kcal": 22.5,
    "fat_g": 0.206,
    "fibre_g": 0.872,
    "folate_ug": 0.0,
    "iron_mg": 0.929,
    "magnesium_mg": 10.8,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.3,
    "potassium_mg": 203.0,
    "protein_g": 0.868,
    "salt_g": 0.28,
    "sat_fat_g": 0.0,
    "sodium_mg": 112.0,
    "sugar_g": 2.61,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2685578",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
