/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Cheese",
  "id": "usda-fndds-2705729",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Cheese, Parmesan, dry grated, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 842.0,
    "carbs_g": 26.2,
    "energy_kcal": 395.0,
    "fat_g": 16.5,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 2.72,
    "magnesium_mg": 38.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 667.0,
    "potassium_mg": 392.0,
    "protein_g": 34.8,
    "salt_g": 3.625,
    "sat_fat_g": 9.3,
    "sodium_mg": 1450.0,
    "sugar_g": 0.78,
    "vitamin_a_ug": 134.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705729",
  "state": "Unspecified",
  "subcategory": "Cheese",
  "tags": [
    "cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
