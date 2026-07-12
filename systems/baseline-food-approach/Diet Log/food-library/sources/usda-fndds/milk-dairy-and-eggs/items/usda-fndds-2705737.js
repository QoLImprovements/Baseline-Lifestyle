/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cubic-inch",
  "description": "Cheese",
  "id": "usda-fndds-2705737",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-cracker-size-slice",
      "kind": "unit",
      "label": "1 cracker-size slice"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "1-cup-shredded",
      "kind": "unit",
      "label": "1 cup, shredded"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "1-cup-diced",
      "kind": "unit",
      "label": "1 cup, diced"
    }
  ],
  "name": "Cheese, Swiss, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 961.0,
    "carbs_g": 3.4,
    "energy_kcal": 179.0,
    "fat_g": 5.1,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.17,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 605.0,
    "potassium_mg": 111.0,
    "protein_g": 28.4,
    "salt_g": 0.4975,
    "sat_fat_g": 3.3,
    "sodium_mg": 199.0,
    "sugar_g": 1.33,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705737",
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
