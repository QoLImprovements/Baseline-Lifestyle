/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Not included in a food category",
  "id": "usda-fndds-2705585",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Milk, dry, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 1260.0,
    "carbs_g": 52.0,
    "energy_kcal": 362.0,
    "fat_g": 0.77,
    "fibre_g": 0.0,
    "folate_ug": 50.0,
    "iron_mg": 0.32,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 968.0,
    "potassium_mg": 1790.0,
    "protein_g": 36.2,
    "salt_g": 1.3375,
    "sat_fat_g": 0.499,
    "sodium_mg": 535.0,
    "sugar_g": 52.0,
    "vitamin_a_ug": 653.0,
    "vitamin_c_mg": 6.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705585",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "milk-dairy-and-eggs",
    "not-included-in-a-food-category",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
