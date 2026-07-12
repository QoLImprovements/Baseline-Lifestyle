/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup-diced",
  "description": "Cheese",
  "id": "usda-fndds-2705765",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-diced",
      "kind": "unit",
      "label": "1 cup, diced"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "1-cracker-size-slice",
      "kind": "unit",
      "label": "1 cracker-size slice"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-cup-shredded",
      "kind": "unit",
      "label": "1 cup, shredded"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup-melted",
      "kind": "unit",
      "label": "1 cup, melted"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "1-cup-cubed",
      "kind": "unit",
      "label": "1 cup, cubed"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 17.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-stick",
      "kind": "unit",
      "label": "1 stick"
    }
  ],
  "name": "Cheese, American, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 529.0,
    "carbs_g": 10.6,
    "energy_kcal": 240.0,
    "fat_g": 14.1,
    "fibre_g": 0.0,
    "folate_ug": 18.0,
    "iron_mg": 0.2,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 829.0,
    "potassium_mg": 330.0,
    "protein_g": 17.6,
    "salt_g": 3.0,
    "sat_fat_g": 8.85,
    "sodium_mg": 1200.0,
    "sugar_g": 8.02,
    "vitamin_a_ug": 250.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705765",
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
