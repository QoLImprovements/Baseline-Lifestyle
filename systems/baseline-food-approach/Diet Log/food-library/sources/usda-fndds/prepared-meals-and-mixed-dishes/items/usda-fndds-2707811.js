/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-cup-crumbled",
  "description": "Biscuits, muffins, quick breads",
  "id": "usda-fndds-2707811",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "1-cup-crumbled",
      "kind": "unit",
      "label": "1 cup, crumbled"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 646.0,
      "key": "1-square-cornbread-8-pan",
      "kind": "unit",
      "label": "1 square cornbread (8\" pan)"
    },
    {
      "gramsPerUnit": 627.0,
      "key": "1-round-cornbread-8-pan",
      "kind": "unit",
      "label": "1 round cornbread (8\" pan)"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 621.0,
      "key": "1-round-cornbread-9-pan",
      "kind": "unit",
      "label": "1 round cornbread (9\" pan)"
    },
    {
      "gramsPerUnit": 634.0,
      "key": "1-square-cornbread-9-pan",
      "kind": "unit",
      "label": "1 square cornbread (9\" pan)"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    }
  ],
  "name": "Cornbread, made from home recipe",
  "nutritionPerBasis": {
    "calcium_mg": 203.0,
    "carbs_g": 42.9,
    "energy_kcal": 287.0,
    "fat_g": 9.8,
    "fibre_g": 1.5,
    "folate_ug": 64.0,
    "iron_mg": 2.68,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 159.0,
    "potassium_mg": 142.0,
    "protein_g": 6.55,
    "salt_g": 1.2125,
    "sat_fat_g": 1.86,
    "sodium_mg": 485.0,
    "sugar_g": 6.85,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.53,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707811",
  "state": "Unspecified",
  "subcategory": "Biscuits, muffins, quick breads",
  "tags": [
    "biscuits-muffins-quick-breads",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
