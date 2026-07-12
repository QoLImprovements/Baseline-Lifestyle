/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-piece",
  "description": "Sausages",
  "id": "usda-fndds-2706179",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-breakfast-size-link",
      "kind": "unit",
      "label": "1 breakfast size link"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cocktail-or-miniature-link",
      "kind": "unit",
      "label": "1 cocktail or miniature link"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-bun-size-or-griller-link",
      "kind": "unit",
      "label": "1 bun-size or griller link"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    }
  ],
  "name": "Chorizo",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 2.63,
    "energy_kcal": 341.0,
    "fat_g": 28.1,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.34,
    "magnesium_mg": 30.0,
    "omega3_g": 0.028,
    "phosphorus_mg": 207.0,
    "potassium_mg": 435.0,
    "protein_g": 19.3,
    "salt_g": 2.4575,
    "sat_fat_g": 9.45,
    "sodium_mg": 983.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.5,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706179",
  "state": "Unspecified",
  "subcategory": "Sausages",
  "tags": [
    "other-foods",
    "sausages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
