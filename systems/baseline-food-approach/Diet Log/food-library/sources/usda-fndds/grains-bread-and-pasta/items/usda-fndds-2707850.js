/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707850",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 8.7,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-individual-loaf",
      "kind": "unit",
      "label": "1 individual loaf"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Bread, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 47.3,
    "energy_kcal": 374.0,
    "fat_g": 18.1,
    "fibre_g": 1.2,
    "folate_ug": 42.0,
    "iron_mg": 2.07,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 131.0,
    "potassium_mg": 171.0,
    "protein_g": 6.01,
    "salt_g": 0.755,
    "sat_fat_g": 2.65,
    "sodium_mg": 302.0,
    "sugar_g": 25.2,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 2.41,
    "vitamin_k_ug": 12.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707850",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
