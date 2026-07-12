/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-half-smoke-sausage",
  "description": "Sausages",
  "id": "usda-fndds-2706192",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "1-half-smoke-sausage",
      "kind": "unit",
      "label": "1 half smoke sausage"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-bun-size-or-griller-link",
      "kind": "unit",
      "label": "1 bun-size or griller link"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-breakfast-size-link",
      "kind": "unit",
      "label": "1 breakfast size link"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-cocktail-or-miniature-link",
      "kind": "unit",
      "label": "1 cocktail or miniature link"
    }
  ],
  "name": "Pork sausage, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 0.15,
    "energy_kcal": 267.0,
    "fat_g": 20.3,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.91,
    "magnesium_mg": 22.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 185.0,
    "potassium_mg": 328.0,
    "protein_g": 20.9,
    "salt_g": 1.745,
    "sat_fat_g": 6.03,
    "sodium_mg": 698.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706192",
  "state": "Unspecified",
  "subcategory": "Sausages",
  "tags": [
    "meat-and-poultry",
    "sausages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
