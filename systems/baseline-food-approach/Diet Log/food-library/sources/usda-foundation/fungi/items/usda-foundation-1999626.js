/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "racc",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-1999626",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Mushroom, lion's mane",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 7.59,
    "energy_kcal": 42.7,
    "fat_g": 0.256,
    "fibre_g": 4.38,
    "folate_ug": 29.6,
    "iron_mg": 0.688,
    "magnesium_mg": 11.7,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 443.0,
    "protein_g": 2.5,
    "salt_g": 0.00084,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.336,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "1999626",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fungi",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
