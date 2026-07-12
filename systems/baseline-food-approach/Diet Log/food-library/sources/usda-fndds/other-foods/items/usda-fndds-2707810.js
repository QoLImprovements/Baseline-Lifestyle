/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-piece",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707810",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 541.0,
      "key": "1-square-cornbread-8-pan",
      "kind": "unit",
      "label": "1 square cornbread (8\" pan)"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "1-cup-crumbled",
      "kind": "unit",
      "label": "1 cup, crumbled"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    }
  ],
  "name": "Cornbread, prepared from mix",
  "nutritionPerBasis": {
    "calcium_mg": 135.0,
    "carbs_g": 54.5,
    "energy_kcal": 330.0,
    "fat_g": 9.58,
    "fibre_g": 2.3,
    "folate_ug": 55.0,
    "iron_mg": 1.85,
    "magnesium_mg": 17.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 391.0,
    "potassium_mg": 133.0,
    "protein_g": 6.59,
    "salt_g": 1.4975,
    "sat_fat_g": 3.73,
    "sodium_mg": 599.0,
    "sugar_g": 16.0,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707810",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
